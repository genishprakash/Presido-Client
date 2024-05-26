import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import styles from "./UpdateProperty.module.css";
const UpdateProperty = (props) => {
    const [formData, setFormData] = useState(props.property);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onClose();
        props.onUpdate(formData, props.property._id);
    };
    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>
                    Title:
                </label>
                <input className={styles.input} type="text" name="title" value={formData.title} onChange={handleChange} />
                <label className={styles.label}>
                    Price:
                </label>
                <input className={styles.input} type="text" name="price" value={formData.price} onChange={handleChange} />
                <label className={styles.label}>
                    Location:
                </label>
                <input className={styles.input} type="text" name="location" value={formData.location} onChange={handleChange} />
                <label className={styles.label}>
                    Description:
                </label>
                <input className={styles.input} type="text" name="description" value={formData.description} onChange={handleChange} />
                <label className={styles.label}>
                    Bedrooms:
                </label >
                <input className={styles.input} type="text" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
                <label className={styles.label}>
                    Bathrooms:
                </label>
                <input className={styles.input} type="text" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={props.onClose}>Cancel</button>
                    <button className={styles.btn} type="submit">Update</button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateProperty;