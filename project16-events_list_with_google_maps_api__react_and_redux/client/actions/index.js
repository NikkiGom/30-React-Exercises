export function selectEvent(event) {
    return {
        type: 'EVENT_SELECTED',
        payload: event
    };
}