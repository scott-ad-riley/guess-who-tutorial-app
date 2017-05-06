# Vanilla Redux and React Guess-Who

This is the next step - moving our code out into a store and subscribing/dispatching actions to it.

This app does not have `react-redux` included, that library not only introduces bindings to allow the two libraries to work closer together, it also starts to enforce the full "react + redux" pattern (i.e. with `connect` and presentation/container components).

Notes:

* our initial state in `src/redux/store.js` will regenerate a new random character each time that we ask for the initial state. This shouldn't ever happen however - even if we dispatch an unrecognised action, we will just return the current store, not reset it to initial.