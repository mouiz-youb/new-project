import React from 'react'
import { useState } from 'react'
import "../App.css"
import RemiderMiddelpart from "./RemiderMiddelpart"
import Sidebarvx from "./Sidebarvx"
function Remider() {
    return (
    <div className="remider">
        <Sidebarvx/>
        <RemiderMiddelpart/>
    </div>
    )
}

export default Remider