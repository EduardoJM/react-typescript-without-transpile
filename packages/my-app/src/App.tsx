import React, { useEffect, useState } from 'react';
import { getCat, CatImageItem } from '@monorepo/sdk';

function App() {
    const [cat, setCat] = useState<CatImageItem | null>(null);

    useEffect(() => {
        async function fetchCat() {
            const cat = await getCat();
            setCat(cat);
        }
        fetchCat();
    }, []);

    return (
        <div className="App">
            <h1>My Cat</h1>
            {cat && (
                <img src={cat.url} style={{ maxWidth: 400 }} />
            )}
        </div>
    );
}

export default App;
