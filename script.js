{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('calculate-button').addEventListener('click', () => \{\
    const startTime = document.getElementById('start-time').value;\
    const endTime = document.getElementById('end-time').value;\
\
    if (startTime && endTime) \{\
        const start = new Date(`1970-01-01T$\{startTime\}:00`);\
        const end = new Date(`1970-01-01T$\{endTime\}:00`);\
\
        let diff = (end - start) / 1000 / 60 / 60; // difference in hours\
\
        // Handle case where end time is on the next day\
        if (diff < 0) \{\
            diff += 24;\
        \}\
\
        document.getElementById('total-hours').textContent = diff.toFixed(2);\
    \} else \{\
        alert('Please enter both start and end times.');\
    \}\
\});\
}