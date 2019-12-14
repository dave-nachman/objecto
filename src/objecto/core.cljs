(ns objecto.core
  (:require [reagent.core :as reagent :refer [atom]]
            [objecto.repl :refer [read-eval]]
            [objecto.env :refer [env]]))

(enable-console-print!)

(defonce app-state 
  (atom {:output "" :input ""}))

(defn evaluate []
  (->> (:input @app-state)
       read-eval
       (swap! app-state assoc :output)))

(defn render-env-kv [[k v]]
   [:tr 
     [:td (name k)]
     [:td (str v)]])

(defn main []
  [:div
   [:input {:on-change #(swap! app-state assoc :input (-> % .-target .-value))}]
   [:button {:on-click evaluate} "Evaluate"]
   [:div (:output @app-state)]
   [:h4 "Environment"]
   [:table 
    [:tbody (map render-env-kv @env)]]])

(reagent/render-component [main]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

