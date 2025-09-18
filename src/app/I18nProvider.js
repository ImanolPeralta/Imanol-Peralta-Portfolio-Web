// src/app/I18nProvider.js
"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18"; // tu configuración de i18next

export default function I18nProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
