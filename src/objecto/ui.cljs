(ns objecto.ui
  (:require [reagent.core :as reagent :refer [atom]]
            [objecto.repl :refer [read-eval]]
            [objecto.env :refer [env]]))

(defonce app-state
  (atom {:output "" :input ""}))

(defn evaluate []
  (try
    (->> (:input @app-state)
         read-eval
         (swap! app-state assoc :output))
    (catch js/Object e
      (swap! app-state assoc :output (str e)))))

(defn render-env-kv [[k v]]
  [:tr
   {:key key}
   [:td {:key "key"} [:div {:style {:padding 6}} (name k)]]
   [:td
    {:key "value"}
    (cond
      (nil? v) [:div {:style {:padding 6}} "nil"]
      (map? v) (map render-env-kv (dissoc v :ident :type :gclass :class__new))
      (fn? v) [:div {:style {:padding 6}} "<function>"]
      :else [:div {:style {:padding 6}} (str v)])]])


(defn run-code [input]
  (swap! app-state assoc :input input)
  (evaluate)
  ;; clear after 2 seconds
  (js/setTimeout #(swap! app-state assoc :input "") 2000))


(defn code-snippit [body]
  [:div
   {:style {:font-family "'IBM Plex Mono', monospace"
            :border-radius 10
            :padding "6px 6px 6px 12px"
            :cursor :pointer
            :margin "6px 0"
            :background-color "rgb(230, 230, 230)"}
    :on-click #(run-code body)}
   [:span {:style {:color "rgb(180, 180, 180)"}} "▶ "]
   body])

(defn ui []
  [:div {:style {:display "flex"}}

   [:div {:style {:flex-basis "70%"}}
    [:h1 {:style {:margin-bottom 0}} "Objecto"]
    [:div {:style {:margin-bottom 12}} "WIP implementation of " [:a {:target "_blank" :href "https://en.wikipedia.org/wiki/Smalltalk"} "Smalltalk"]]
    [:input
     {:style {:font-family "'IBM Plex Mono', monospace"}
      :value (@app-state :input)
      :on-change #(swap! app-state assoc :input (-> % .-target .-value))}]
    [:button {:on-click evaluate} "Evaluate"]
    [:div (:output @app-state)]
    [:h2 "Environment"]
    [:table
     {:style {:font-family "'IBM Plex Mono', monospace"}}
     [:tbody (map render-env-kv @env)]]
    [:div {:style {:margin-top 16}} "Made by Dave Nachman | " [:a {:href "https://github.com/dave-nachman/objecto"} "Github"]]]
   [:div
    {:style {:padding-left 12}}
    [:h2 "Examples"]
    [:div "Assign a number to a variable"]
    (code-snippit "x := 42.")
    [:div "Evaluate a variable"]
    (code-snippit "x.")
    [:div "Assign a code block (an anonymous function)"]
    (code-snippit "double := [ :x | x * 2 ]")
    [:div "Evaluate a code block"]
    (code-snippit "double value: 100")
    [:div "Create a method"]
    (code-snippit "Number >> triple || self * 3.")
    [:div "Use the method"]
    (code-snippit "22 triple.")]])

