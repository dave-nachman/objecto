(ns objecto.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [objecto.tests]))

(doo-tests 'objecto.tests)
