# Full Redux and React Guess-Who

This is the final step - checkout the vanilla redux and react guess who if you've not seen redux before.

If you have and are interested in more, this is the full implementation using pure/functional components and container components.

Notes:

* our initial state in `src/redux/store.js` will regenerate a new random character each time that we ask for the initial state. This shouldn't ever happen however - even if we dispatch an unrecognised action, we will just return the current store, not reset it to initial.