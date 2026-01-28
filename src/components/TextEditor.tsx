import { ITextEditorProps } from '@/types';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';

const TextEditor = ({ currentValue = '' }: ITextEditorProps) => {
  const [content, setContent] = useState(currentValue);
  return (
    <div>
      <MDEditor
        value={content}
        onChange={(text) => setContent(text ?? '')}
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
