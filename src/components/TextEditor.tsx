import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';

const TextEditor = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <MDEditor
        value={value}
        onChange={(text) => setValue(text ?? '')}
        textareaProps={{
          placeholder: 'Share your thoughts...',
          name: 'body',
        }}
        height={500}
        preview='edit'
        previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
      />
    </div>
  );
};

export default TextEditor;
