import fs from "fs"
import MarkdownIt from "markdown-it"
import FrontMatter from "gray-matter"

const md = new MarkdownIt({
	html: true,
	linkify: true,
	quotes: "“”‘’",
	typographer: true,
})

export async function get(request, context)
{
	const { filename } = request.params
	const matter = FrontMatter(fs.readFileSync(`static/content/${filename}.md`).toString())
	const { data, content } = matter

	return {
		body:
		{
			properties: data,
			html: md.render(content),
		}
	}
}
