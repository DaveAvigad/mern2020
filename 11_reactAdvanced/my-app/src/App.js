import React, { useEffect } from 'react';

export default function App () {

    useEffect(() => {
      console.log('i have arrived at the party!');
      document.title = 'present';
    });

    return <div>stuff goes here</div>;
}
