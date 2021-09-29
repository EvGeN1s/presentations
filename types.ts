// Editor

export type Editor = {
    presentationsHistory: PresentationsHistory,
    presentation: Presentation,
    editorState: EditorState
};

export type EditorState = {
    commandHistory: Diff[],
    mode: Mode,
    selectedItems: selectedItem[],
    currentSlide: Slide
}


// Presentation

export type Presentation = {
    name: string,
    id: string,
    slides: Slide[]
};

type PresentationsHistory = PresentationId[];

type PresentationId = number;

// Slide

export type Slide = {
    background: string,
    id: string,
    contentCollection: Content[]
};


// Content

export type Content = {
    x: number,
    y: number,
    w: number,
    h: number,
    angle: number,
    type: ContentType,
    id: string,
    border: Border
}

export type ContentType = Text | Ellipse | Rect | Triangle | Img;

export type Border = {
    color: Color,
    size: number
}

type Text = {
    textContent: string,
    fontFamily: FontFamily,
    fontSize: number
}

type Ellipse = {
    color: Color
}

type Rect = {
    color: Color
}

type Triangle = {
    color: Color,
    thirdPointX: number,
    thirdPointY: number
}

type Img = {
    source: string
}


// Others

type Diff = Object;

type Mode = 'edit' | 'preview';

type selectedItem = SlideId | ContentId;

type SlideId = string;

type ContentId = string;

export type Color = 'red' | 'greed' | 'blue';

type FontFamily = 'Verdana' | 'Times New Roman';
