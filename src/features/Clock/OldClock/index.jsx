import React, { useEffect, useState } from 'react';
import useClock from '../../Hooks/useClock';

function ClockTimeDigital() {
    const { time } = useClock();
    return (
        <div>
            {time}
        </div>
    );
}

export default ClockTimeDigital;