import { Editor, Presentation , Border, Content, ContentType, Slide, Color} from "./types";
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


// Content Collection

/**
* @param {Editor} editor
* @param {ContentType} type
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
* @param {number} angle
* @param {string} id
* @param {Border} border
* @return {Editor}
*/
function addContent(editor: Editor, type: ContentType, x: number, y: number, width: number, height: number, angle: number, id: string, border: Border): Editor {
    let newEditor: Editor = deepCopy(editor);
    let newContent: Content = {x, y, w: width,h: height, angle, type, id, border};
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    currSlide.contentCollection.push(newContent);
    return newEditor
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {number} orderDifference
* @return {Editor}
*/
function changeOrder(editor: Editor, contentId: string, orderDifference: number): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let selectedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);

    if (orderDifference > 0) {        
        for (let i: number = selectedContentIndex; i < (selectedContentIndex + orderDifference); i += 1) {
            currSlide.contentCollection[i], currSlide.contentCollection[i + 1] =  currSlide.contentCollection[i + 1], currSlide.contentCollection[i];
        }
    }
    else {
        for (let i: number = selectedContentIndex; i < (selectedContentIndex + orderDifference); i -= 1) {
            currSlide.contentCollection[i], currSlide.contentCollection[i - 1] =  currSlide.contentCollection[i - 1], currSlide.contentCollection[i];
        }
    }
    
    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @return {Editor}
*/
function deleteContent(editor: Editor, contentId: string): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let removedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    currSlide.contentCollection.slice(removedContentIndex);
    return newEditor;
}

//Content

/**
* @param {Editor} editor
* @param {string} contentId
* @param {number} width
* @param {number} height
* @return {Editor}
*/
function changeSize(editor: Editor, contentId: string, width: number, height: number): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.w = width;
    changedContent.h = height;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {number} width
* @return {Editor}
*/
function changeWidth(editor: Editor, contentId: string, width: number): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.w = width;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {number} height
* @return {Editor}
*/
function changeHeight(editor: Editor, contentId: string, height: number): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.h = height;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {number} angle
* @return {Editor}
*/
function changeAngle(editor: Editor, contentId: string, angle: number): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.angle = angle;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {number} x
* @param {number} y
* @return {Editor}
*/
function changePosition(editor: Editor, contentId: string, x: number, y: number): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.x = x;
    changedContent.y = y;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {Border} border
* @return {Editor}
*/
function changeBorder(editor: Editor, contentId: string, border: Border): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.border = border;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {Color} color
* @return {Editor}
*/
function changeBorderColor(editor: Editor, contentId: string, color: Color): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.border.color = color;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}

/**
* @param {Editor} editor
* @param {string} contentId
* @param {number} size
* @return {Editor}
*/
function changeBorderSize(editor: Editor, contentId: string, size: number): Editor {
    let newEditor: Editor = deepCopy(editor);
    let currSlide: Slide = newEditor.presentation.slides[editor.editorState.currentSlide.id];
    let changedContentIndex: number = currSlide.contentCollection.findIndex(item => item.id == contentId);
    let changedContent: Content = currSlide.contentCollection.find(item => item.id == contentId);
    changedContent.border.size = size;
    currSlide.contentCollection[changedContentIndex] = changedContent;

    return newEditor;
}