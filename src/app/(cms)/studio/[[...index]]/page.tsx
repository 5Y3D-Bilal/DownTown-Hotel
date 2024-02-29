"use client"
import React from 'react';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../../sanity.config'


const Studio: React.FC = () => {

    return <NextStudio config={config} />
}
export default Studio;