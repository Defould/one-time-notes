import styles from './search.module.scss';
import { ChangeEvent } from 'react';

type SearchProps = {
	callback: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ callback }: SearchProps) => {
	const inputPlaceholder = 'Найти заметку...';

	return (
		<div className={styles.search}>
			<input
				type='text'
				className={styles.searchInput}
				placeholder={inputPlaceholder}
				onChange={(event) => callback(event)}
			/>
			<button
				className={styles.searchButton}
				type='button'
				onClick={(event) => {
					event.preventDefault();
					return;
				}}
			>
				<svg
					width='19'
					height='19'
					viewBox='0 0 19 19'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={styles.searchIcon}
				>
					<g clipPath='url(#clip0_263_750)'>
						<path
							d='M9.10408 17.2187C4.63117 17.2187 0.989502 13.5771 0.989502 9.10415C0.989502 4.63123 4.63117 0.989563 9.10408 0.989563C13.577 0.989563 17.2187 4.63123 17.2187 9.10415C17.2187 13.5771 13.577 17.2187 9.10408 17.2187ZM9.10408 2.17706C5.28033 2.17706 2.177 5.28831 2.177 9.10415C2.177 12.92 5.28033 16.0312 9.10408 16.0312C12.9278 16.0312 16.0312 12.92 16.0312 9.10415C16.0312 5.28831 12.9278 2.17706 9.10408 2.17706ZM17.4166 18.0112C17.2662 18.0112 17.1158 17.9558 16.997 17.837L15.4137 16.2537C15.3032 16.142 15.2413 15.9912 15.2413 15.8341C15.2413 15.677 15.3032 15.5263 15.4137 15.4145C15.6433 15.1849 16.0233 15.1849 16.2528 15.4145L17.8362 16.9979C18.0658 17.2274 18.0658 17.6074 17.8362 17.837C17.7174 17.9558 17.567 18.0112 17.4166 18.0112Z'
							fill='white'
						/>
					</g>
					<defs>
						<clipPath id='clip0_263_750'>
							<rect width='19' height='19' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	);
};

export default Search;
