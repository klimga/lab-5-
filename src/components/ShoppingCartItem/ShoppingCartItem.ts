import Styles from './ShoppingCartItem.css';

export enum Attribute {
	'uid' = 'uid',
	'image' = 'image',
	'tittle' = 'tittle',
	'price' = 'price',

}

class Shopping extends HTMLElement {
	uid?: string;
	image?: string;
	tittle?: string;
	price?: string;


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			uid: null,
			image: null,
			tittle: null,
			price: null,
		
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML = `
			<style> ${Styles}</style>

			<section class="card">
				<div class="contenedor">
					<img class= "image" src=${this.image}>
					<div class="info">
						<h1>${this.title}</h1>
						<p>${this.price}$</p>

					</div>
				</div>
			</section>

			`;
		}
	}
}

customElements.define('Shopping-container', Shopping);
export default Shopping;