import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import TurndownService from "turndown";

function sanitizeMarkdownContent(markdownInput) {
    const turndown = new TurndownService();

    // Step 1: Markdown → HTML
    const rawHtml = marked.parse(markdownInput);
    console.log("converted Html: ",rawHtml);

    // Step 2: Remove unsafe tags/scripts
    const safeHtml = sanitizeHtml(rawHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
    });
    console.log("sanitized Html: ",safeHtml);

    // Step 3: HTML → Markdown
    const cleanMarkdown = turndown.turndown(safeHtml);
    console.log("sanitized Markdown: ",cleanMarkdown);

    return cleanMarkdown;
}

export default sanitizeMarkdownContent;
