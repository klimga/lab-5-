import './components/export';
import './screen/dashboard';
import { Dashboard } from './screen/dashboard';
import Styles from './styles.css';
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML = `

			<style> ${Styles}</style>`;
		}
		const something = this.ownerDocument.createElement('app-dashboard') as Dashboard;
		this.shadowRoot?.appendChild(something);
	}
}

customElements.define('app-container', AppContainer);
