import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';
import {FirebaseContext,AuthContext } from '../../store/FirebaseContext'
const Create = () => {
	const history = useHistory()
	const {firebase} = useContext(FirebaseContext)
	const {user} = useContext(AuthContext);
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [price, setPrice] = useState(0)
	const [image, setImage] = useState(null)
	const date = new Date();
	const handleSubmit = () => {
		firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
			ref.getDownloadURL().then((url) => {
				firebase.firestore().collection('products').add({
					name,
					category,
					price,
					url,
					userId : user.uid,
					createdAt : date.toDateString()
				})
				history.push('/')
			})
		})
	}
	return (
		<Fragment>
			<Header />
			<card>
				<div className="centerDiv">
					<form>
						<label htmlFor="fname">Name</label>
						<br />
						<input
							className="input"
							type="text"
							id="fname"
							name="Name"
							defaultValue="John"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<br />
						<label htmlFor="fname">Category</label>
						<br />
						<input
							className="input"
							type="text"
							id="fname"
							name="category"
							defaultValue="John"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						/>
						<br />
						<label htmlFor="fname">Price</label>
						<br />
						<input
							className="input"
							type="number"
							id="fname"
							name="Price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
						<br />
					</form>
					<br />
					<img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
					<br />
					<input type="file" onChange={(e) => {
						setImage(e.target.files[0])
					}} />
					<br />
					<button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
				</div>
			</card>
		</Fragment>
	);
};

export default Create;
