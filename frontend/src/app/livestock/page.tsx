'use client';
import { useState } from 'react';
import { PageHeader } from '@/components'
// import styles from './style.module.css';
import styles from '../page.module.css'
import Image from 'next/image';
import emailIcon from '../../../public/mail.png';
import check from '../../../public/check.png';

function livestock() {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = async () => {
        await navigator.clipboard.writeText('codersclub.gec@gmail.com');
        setCopied(true);
    };

    return (
        <div className="page">
        </div>
    );
};


export default livestock