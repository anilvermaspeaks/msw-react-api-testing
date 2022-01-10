import {rest} from 'msw';
import {posts} from './post.response'
export const handlers = [
	rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(posts),
		)
	})

]


