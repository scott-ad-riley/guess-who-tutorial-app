# Full Redux and React Guess-Who

This is the final step - checkout the vanilla redux and react guess who if you've not seen redux before.

If you have and are interested in more, this is the full implementation using pure/functional components and container components.

Notes:

* our initial state in `src/redux/store.js` will regenerate a new random character each time that we ask for the initial state. This shouldn't ever happen however - even if we dispatch an unrecognised action, we will just return the current store, not reset it to initial.

## Next Steps

These are just some ideas around adding extra functionality to the app

* Fix the problems with randomisation
* Instead of hiding the characters when you click guess, just hide the "Guess" button and replace it with some other text

### Advanced/More work

These are some more complex steps that we won't necessarily implement but it's worth having a think about how you would go about doing so

* Create a server and stop storing the answer in the client, have it post up to the server each time you make a guess
* Pull down a set of names from another API instead of the json file in the project
* Attach metadata to each character and reveal clues as the games goes on, probably best to do this paired with another API since it'll give you a bunch of metadata with your character (in my head this is http://pokeapi.co/, http://swapi.co/ or a static dataset of footballers/olympics etc.)
* Implement turn-based multiplayer (i.e. same game, first to get the correct answer wins)

## Testing

I've specifically not tested the internals of the redux store (i.e. the action creators and the reducer). I have tested the components that modify the store (`Character` when you click to guess one and `GameOver` when you click to restart the game) and verified that after their modification the store is in the correct state.

### Jest

This is a pretty fully featured test runner/framework - it's what reads our test files, compiles the jsx inside them, executes the expectation/assertion then displays the output. It has a pretty long list of features including snapshotting and code coverage. It's also the default test runner/framework that ships with CRA

Alternatives include `ava` and `mocha` (the latter's a very simple/basic runner)

### Enzyme

This library gives us the ability to use `mount` and `shallow` - the latter is incredibly useful when unit-testing individual components as it won't render the tree all the way down.

Not many obvious alternatives here - this is a specific to react testing helper though.

### redux-mock-store

We're using this to create a small mock store - it's not totally necessary and in tests where we're testing connected components that inspect the state I set the store up with our default state and merge in anything that's required. I could have set the store up for real but it's less work and we don't need the reducer or actions or anything (we just need a store in a specific state). If we test interaction with the state then I would pass our real store in.