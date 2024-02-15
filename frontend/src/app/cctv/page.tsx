import Image from 'next/image';
import styles from '../page.module.css';
import { NameDate, CCTVCamfeed, CCTVIntrusionSummary } from '../../components';

// to open a page without reloading (why react was made in the first place)
// https://nextjs.org/docs/app/api-reference/components/link
import Link from 'next/link';

export default function cctv() {
  const camUrl = 'http://192.168.0.176:8080/video';

  return (
    <main className={styles.main}>
      <div className='homecomponent'>
        <NameDate />
        <div className='camAreaHome'>
          <div className='camArea'>
            <CCTVCamfeed camUrl={camUrl} />
            <CCTVCamfeed camUrl={camUrl} />
            <CCTVCamfeed camUrl={camUrl} />
            <CCTVCamfeed camUrl={camUrl} />
            <CCTVCamfeed camUrl={camUrl} />
            <CCTVCamfeed camUrl={camUrl} />
            <CCTVCamfeed camUrl={camUrl} />
          </div>
          <CCTVIntrusionSummary />
        </div>
      </div>
    </main>
  );
}
