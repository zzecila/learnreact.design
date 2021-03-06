import {jsx} from '@emotion/core'
import {Menu} from '@headlessui/react'
import Link from 'next/link'

export function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="">LearnReact.design</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <Menu>
              <Menu.Button>Tutorials</Menu.Button>
              <Menu.Items>
                <Menu.Item className="">
                  <Link href="/design-react">Design x React</Link>
                </Menu.Item>
                <Menu.Item className="">
                  <Link href="/html-css-js">Fundamentals</Link>
                </Menu.Item>
                <Menu.Item className="">
                  <Link href="/react">React</Link>
                </Menu.Item>
                <Menu.Item className="">
                  <Link href="/framer">Framer</Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <a href="/webinars">Webinars</a>
          </li>
          <li>
            <a href="/hire-me">Hire Linton</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
