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
      (swap! app-state assoc (str e)))))

(defn render-env-kv [[k v]]
  [:tr
   [:td (name k)]
   [:td (if (nil? v) "nil" (str v))]])



(defn ui []
  [:div {:style {:display "flex"}}
   [:div {:style {:flex-basis "70%"}}
    [:h1 "Objecto"]
    [:input {:on-change #(swap! app-state assoc :input (-> % .-target .-value))}]
    [:button {:on-click evaluate} "Evaluate"]
    [:div (:output @app-state)]
    [:h4 "Environment"]
    [:table
     [:tbody (map render-env-kv @env)]]]
   [:div
    [:h2 ""]]])
