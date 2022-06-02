import { marked } from 'marked'

export default {

methods: {
    markdown(item) {
        let html = marked(item)
        html = html.replace(/<p>/g, '')
        return html
    },
    }
}