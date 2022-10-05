import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout pageTitle="Web / Technologies">
			<>
				<section>
					<div>
						<h1>
							Web Developer from <span>Switzerland</span>
						</h1>
						<div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Numquam, corporis, ipsa inventore perferendis iusto quis
								architecto nostrum quaerat quae neque temporibus. Ea iste
								molestiae veritatis earum est mollitia incidunt maxime.
							</p>
							<button>Read more</button>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h2>Selected Projects</h2>
					</div>
				</section>
				<section>
					<div>
						<h2>Get in touch</h2>
					</div>
				</section>
			</>
		</Layout>
	);
};

export default IndexPage;
