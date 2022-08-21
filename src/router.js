const Router_CHANGE_EVENT = 'ROUTE_CHANGE';

export const init = (onRouteChange) => {
    window.addEventListener(Router_CHANGE_EVENT, () => {
        onRouteChange();
    });
}

export const routeChange = (url, params) => {
    history.pushState(null, null, url);
    window.dispatchEvent(new CustomEvent(Router_CHANGE_EVENT, params));
}