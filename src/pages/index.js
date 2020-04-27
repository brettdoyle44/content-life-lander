import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"
import { v1 as uuidv1 } from "uuid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/main-cl-dashboard.png"
import thumbnailEvent from "../../static/images/cl-idea-screen.png"
import thumbnailBoard from "../../static/images/storyboard-cl-main.png"
import thumbnailNews from "../../static/images/cl-collaborate-screen.png"
import thumbnailTeams from "../../static/images/CL-analyze-data.png"
import styled from "styled-components"
import { Link } from "react-scroll"

const Image = styled.img`
  border-radius: 15px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`
const HeaderForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 0px 25px;
  align-self: center;
  align-items: center;
  justify-content: center;
  @media (min-width: 40em) {
    flex-direction: row;
    padding: 25px 50px 0px 50px;
  }
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: #071435;
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: #5369f8;
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  margin-bottom: 8px;
  @media (min-width: 40em) {
    max-width: 30em;
    margin: 0;
  }
`

const NotValidHeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: red;
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: red;
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  margin-bottom: 8px;
  @media (min-width: 40em) {
    max-width: 30em;
    margin: 0;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 58px;
  display: block;
  margin-left: 8px;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: #5369f8;
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (min-width: 40em) {
    width: initial;
  }
`

const HeaderText = styled.p`
  padding: 0px 25px;
  @media (min-width: 40em) {
    max-width: 40em;
    text-align: center;
    margin: auto;
  }
`

const IndexPage = () => {
  const [email, setEmail] = useState("")
  const [notValid, setNotValid] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    try {
      if (validateEmail(email)) {
        await writeUserData(uuidv1(), email)
        setEmail("")
        navigate("/confirm")
      }
      setEmail("")
      setNotValid(true)
    } catch (e) {
      console.error(e)
    }
  }

  function validateEmail(theEmail) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(theEmail)
  }

  function writeUserData(userId, theEmail) {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        email: theEmail,
      })
  }

  return (
    <Layout>
      <SEO title="Create better content" />

      <div className={"page-header home"} id="header">
        <h1>Create Better Content</h1>
        <HeaderText>
          Take your creative process to the next level with Content Life.
          Organize, plan, storyboard, and analyze your content all from one
          platform. Sign up for early access and you'll be the first to know
          when we're live.
        </HeaderText>

        <HeaderForm onSubmit={handleSubmit}>
          {!notValid ? (
            <HeaderInput
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Your email"
            />
          ) : (
            <NotValidHeaderInput
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Please enter valid email"
            />
          )}
          <HeaderButton>Early access</HeaderButton>
        </HeaderForm>
        <Image alt={"Dashboard"} src={featureImage} />
      </div>

      <div className={"container"}>
        <div className={"features"} id="features">
          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <Image alt={"Plan"} src={thumbnailEvent} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Plan</h2>
                  <p>
                    Build out and iterate on your ideas in one centralized
                    place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Storyboard</h2>
                  <p>
                    Planning to create a video series? Use our drag-and-drop
                    storyboard tool.
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <Image alt={"Storyboard"} src={thumbnailBoard} />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <Image alt={"Collaborate"} src={thumbnailNews} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Collaborate</h2>
                  <p>
                    Invite your friends and collaborate on any of your ideas or
                    storyboards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>Track</h2>
                  <p>
                    Connect your content creation platforms and see which ideas
                    are working.
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <Image alt={"Track"} src={thumbnailTeams} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"call-to-action"}>
        <div className={"container"}>
          <div className={"call-to-action__content"}>
            <h2>Sign up for early access</h2>
            <p>
              Sign up and be one of the first to get access to the platform when
              we launch.
            </p>
          </div>

          <div style={{ cursor: "pointer" }} className={"button"}>
            <Link smooth={true} to="header">
              Early Access
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
