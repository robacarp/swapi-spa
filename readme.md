## Intro

This Star Wars api consumer can be run via docker or natively.

## Technical Summary

### Front end:
 - Vanilla Javascript, with Web Components.
 - Tailwind 3 for basic styling utility classes.

### Back end:

A simple static asset server, written in crystal. Any static server will do.

### API caching:

Front end SWAPI caching [is implemented](https://github.com/robacarp/swapi-spa/blob/master/public/javascript/swapi.js#L37) by a simple url => response hash. As a result every SWAPI request should happen no more than once.

## Run it

### Running a demo (docker)

- `script/run` to build a container and start it.
- visit [http://0.0.0.0:3000](http://0.0.0.0:3000)
- ctrl-c to quit.

### Prerequisites (on-system run)

- [asdf](https://asdf-vm.com/) will install runtimes, but these plugins are needed:
  - crystal: `asdf plugin-add crystal https://github.com/asdf-community/asdf-crystal.git`
  - nodejs: `asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git`
- [overmind](https://github.com/DarthSim/overmind) or some other Procfile runner

### Running a demo (on-system)

- `asdf install` to get node and crystal-lang setup
- `shards` to install crystal dependencies
- `overmind s` to boot and run everything
- visit [http://0.0.0.0:3000](http://0.0.0.0:3000)
- ctrl-c to quit.
