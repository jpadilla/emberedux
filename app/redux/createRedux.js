import Redux from './Redux';

export default function createRedux(...args) {
  const redux = new Redux(...args);

  var _context;

  return {
    subscribe: (_context = redux).subscribe.bind(_context),
    dispatch: (_context = redux).dispatch.bind(_context),
    getState: (_context = redux).getState.bind(_context),
    getDispatcher: (_context = redux).getDispatcher.bind(_context),
    replaceDispatcher: (_context = redux).replaceDispatcher.bind(_context)
  };
}
