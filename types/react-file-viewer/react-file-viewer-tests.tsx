import * as React from 'react';
import FileViewer from 'react-file-viewer';

const file = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png';
const type = 'png';

const CustomErrorComponent = () => <div>Error occurred!</div>;

<FileViewer
    fileType={type}
    filePath={file}
    errorComponent={<CustomErrorComponent/>}
    onError={(e: Error) => console.error(e)}
/>;

<FileViewer
    fileType={'unsupported-type' as any} // Force unsupported type for testing
    filePath={file}
    unsupportedComponent={<div>Unsupported File Type</div>}
/>;
