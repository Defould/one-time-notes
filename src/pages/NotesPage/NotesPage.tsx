import styles from './notesPage.module.css';
import SideBar from '@/widgets/SideBar/SideBar';
import Note from '@/widgets/Note/Note';

export default function NotesPage() {
	return (
		<div className={styles.notes}>
			<SideBar />
			<Note />
		</div>
	);
}
