import styles from './ButtonCopy.module.scss';

const ButtonCopy = () => {
	return (
		<button className={styles.buttonCopy}>
			<svg width='30' height='28' viewBox='0 0 30 28'>
				<path
					d='M13.875 26.5417H8.625C3.7375 26.5417 1.5625 24.5117 1.5625 19.95V15.05C1.5625 10.4883 3.7375 8.45831 8.625 8.45831H13.875C18.7625 8.45831 20.9375 10.4883 20.9375 15.05V19.95C20.9375 24.5117 18.7625 26.5417 13.875 26.5417ZM8.625 10.2083C4.75 10.2083 3.4375 11.4333 3.4375 15.05V19.95C3.4375 23.5667 4.75 24.7917 8.625 24.7917H13.875C17.75 24.7917 19.0625 23.5667 19.0625 19.95V15.05C19.0625 11.4333 17.75 10.2083 13.875 10.2083H8.625Z'
					fill='black'
				/>
				<path
					d='M21.375 19.5417H20C19.4875 19.5417 19.0625 19.145 19.0625 18.6667V15.05C19.0625 11.4333 17.75 10.2083 13.875 10.2083H10C9.4875 10.2083 9.0625 9.81165 9.0625 9.33331V8.04998C9.0625 3.48831 11.2375 1.45831 16.125 1.45831H21.375C26.2625 1.45831 28.4375 3.48831 28.4375 8.04998V12.95C28.4375 17.5117 26.2625 19.5417 21.375 19.5417ZM20.9375 17.7917H21.375C25.25 17.7917 26.5625 16.5667 26.5625 12.95V8.04998C26.5625 4.43331 25.25 3.20831 21.375 3.20831H16.125C12.25 3.20831 10.9375 4.43331 10.9375 8.04998V8.45831H13.875C18.7625 8.45831 20.9375 10.4883 20.9375 15.05V17.7917Z'
					fill='black'
				/>
			</svg>
		</button>
	);
};

export default ButtonCopy;
