import React, { ReactNode } from "react";
import Image from "next/image";

import { IconButton, Paper } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styles from "./ModalLogin.module.scss";
import { vk, google } from "../../assets/svg/index";

import { TJButton } from "../assets/TJButton";

interface ModalLoginProps {
    closeModal: () => void;
}

export const ModalLogin: React.FC<ModalLoginProps> = ({ closeModal }) => {
    return (
        <div className={styles.shadow} onClick={closeModal}>
            <Paper
                elevation={0}
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.image}>
                    <svg viewBox="0 0 24 25" id="site_logo">
                        <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
                        <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
                        <path
                            fill="rgba(0,0,0,0.15)"
                            d="M7.5 19h1v6l-1-6z"
                        ></path>
                    </svg>
                </div>

                <div className={styles.right}>
                    <div className={styles.close}>
                        <IconButton onClick={closeModal}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>

                    <div className={styles.auth}>
                        <div className={styles.title}>Регистрация</div>
                    </div>

                    <div className={styles.buttons}>
                        <TJButton>
                            <div className={styles.button}>
                                <MailOutlinedIcon />
                                <div className={styles.title}>Почта</div>
                            </div>
                        </TJButton>

                        <TJButton>
                            <div className={styles.button}>
                                <div className={styles.img}>
                                    <Image
                                        src={vk}
                                        alt="vk logo"
                                        height="24px"
                                        width="24px"
                                    />
                                </div>
                                <div className={styles.title}>ВКонтакте</div>
                            </div>
                        </TJButton>
                        <TJButton>
                            <div className={styles.button}>
                                <div className={styles.img}>
                                    <Image
                                        src={google}
                                        alt="google logo"
                                        height="24px"
                                        width="24px"
                                    />
                                </div>
                                <div className={styles.title}>Google</div>
                            </div>
                        </TJButton>
                    </div>

                    <div className={styles.footer}>
                        <span>Есть аккаунт?</span>
                        <button>Войти</button>
                    </div>
                </div>
            </Paper>
        </div>
    );
};
