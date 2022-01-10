import {render, screen} from '@testing-library/react';
import Posts from './Posts';
import {posts} from '../../mocks/post.response'
import {server} from '../../mocks/server'
import {errorHandlers} from '../../mocks/errorHandler'

test('get post data', async () => {
	render(<Posts />);
	const title = posts[0].title;
	const linkElement = await screen.findByText(title);
	expect(linkElement).toBeInTheDocument();

});


test('show error if api fails', async () => {
	server.use(...errorHandlers)
	render(<Posts />);
	const errorMessage = await screen.findByText(/Error Occured!/i)
	expect(errorMessage).toBeInTheDocument()
});

