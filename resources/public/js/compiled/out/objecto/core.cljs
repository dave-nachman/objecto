(ns objecto.core
  (:require [reagent.core :as reagent]
            [objecto.ui :refer [ui]]))

(enable-console-print!)

(reagent/render-component [ui]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

