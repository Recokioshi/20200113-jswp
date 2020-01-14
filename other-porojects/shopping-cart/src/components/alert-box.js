import {div, txt} from "../dom/dom-crators";

export function makeAlertBox(text, type = 'danger') {
    return div([
        txt(text),
        txt('👀')
    ], `alert alert-${type}`)
}