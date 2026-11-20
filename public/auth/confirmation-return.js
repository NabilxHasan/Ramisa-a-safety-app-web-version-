if (location.search || location.hash) {
  history.replaceState(null, '', location.pathname);
}
