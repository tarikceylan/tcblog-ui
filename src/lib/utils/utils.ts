import { remark } from 'remark';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

export const formatDate = (TZDate: Date) => {
  const date = new Date(TZDate);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
};

export function markdownToPlainText(markdown: string): string {
  const tree = remark().use(remarkParse).parse(markdown);
  let text = '';

  visit(tree, 'text', (node) => {
    text += node.value + ' ';
  });

  return text.trim();
}
