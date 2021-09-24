import { Editor, Presentation } from "./types";
import { deepCopy } from "./utils";

/**
* @param {Editor} editor
* @param {string} name
* @return {Editor}
*/
function addPresentation(editor: Editor, name: string): Editor {
    let newEditor: Editor = deepCopy(editor);
    let presentation: Presentation = { name, id: 'p1', slides: null }
    newEditor.presentation = presentation;
    return newEditor;
}
