import fs from "fs"
import MarkdownIt from "markdown-it"

const md = new MarkdownIt({
	html: true,
	linkify: true,
	quotes: "“”‘’",
	typographer: true,
})

export async function get(request, context)
{
	const { filename } = request.params
	const content = fs.readFileSync(`static/content/${filename}.md`).toString()

	return {
		body: md.render(content)
	}
}
