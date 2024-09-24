import { ReactElement } from 'react';

declare module 'react-file-viewer' {
    type SupportedFileType =
        | 'png'
        | 'jpeg'
        | 'gif'
        | 'bmp'
        | 'pdf'
        | 'csv'
        | 'xlsx'
        | 'docx'
        | 'mp4'
        | 'webm'
        | 'mp3';

    interface FileViewerProps {
        fileType: SupportedFileType;
        filePath: string;
        onError?: (error: Error) => void;
        errorComponent?: ReactElement;
        unsupportedComponent?: ReactElement;
    }

    // Описание компонента как функции
    const FileViewer: React.FC<FileViewerProps>;

    export default FileViewer;
}
