import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CheckIcon from "@mui/icons-material/Check";
import styles from "./RatingItem.module.scss";

import { TJButton } from "../../../assets/TJButton";

interface RatingItemProps {
    title: string;
    place: number;
    image: string;
    rating: number;
}

export const RatingItem: React.FC<RatingItemProps> = React.memo(
    function RatingItem({ place, image, title, rating }) {
        const [follow, setFollow] = useState<boolean>(false);

        return (
            <div className={styles.item}>
                <div className={styles.link}>
                    <Link href="#">
                        <a>
                            <span className={styles.place}>{place}</span>
                            <Image
                                src={image}
                                alt="avatar"
                                width="30"
                                height="30"
                            />
                            <span className={styles.title}>{title}</span>
                        </a>
                    </Link>
                </div>

                <div className={styles.ratingNumber}>{rating}</div>

                <TJButton
                    onClick={() => setFollow(!follow)}
                    style={{ width: "44px", height: "40px" }}
                >
                    {!follow ? (
                        <PersonAddIcon />
                    ) : (
                        <CheckIcon style={{ color: "#07A23B" }} />
                    )}
                </TJButton>
            </div>
        );
    }
);
