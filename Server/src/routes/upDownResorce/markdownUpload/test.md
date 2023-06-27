1. First item
2. Second item
3. Third item
4. Fourth item

# formidable

![这是图片](https://raw.githubusercontent.com/node-formidable/formidable/master/logo.png "Magic Gardens")

> A Node.js module for parsing form data, especially file uploads.

## test

[![Code style][codestyle-img]][codestyle-url]
[![codecoverage][codecov-img]][codecov-url]
[![linux build status][linux-build-img]][build-url]
[![windows build status][windows-build-img]][build-url]
[![macos build status][macos-build-img]][build-url]
`` Use `code` in your Markdown file. ``

### react -Router6

#### <Routes />

取代 router5 中的<Switch> 每一个路由对象都需要使用<Routes>标签进行包裹使用

```js
<Routes>
  <Route path="..." element={<xxx />}></Route>
</Routes>
```

### <Navigate />

取代 router5 中的<Redirct />重定向标签

```js
{
  path: "/",
  element:<Naviage to={"path"} />
}
```

### useRoutes hook

router6 中我们可以对 routes 进行统一管理建立映射表 然后交给 useRoutes hooks 进行管理

```js
//建立路由映射表
const routes = [
  {
    path: "xxx",
    element: <xxx />,
    children: [{}],
  },
];
const element = useRoutes(routes);
jsx: {
  element;
}
嵌套路由 则需要使用<Outlet />标签作为路由出口
```

### params 参数

声明 v5 版本一样 若创建了路由映射表则需要找到对应配置进行配置
组件接收 通过 useParams hook 进行接收

### search 参数

声明和 v5 版本一样 不需要提前占位 直接传递即可
接收需要通过 useSearchParams hook 该 hook 提供了两个参数返回

```js
const [search, setSearch] = useSearchParams;
//通过 search.get('key')则可取出我们传递的参数
//第二个函数用于修改search参数
setSearch("id=xxx&name=xxx");
```

### state 参数

```js
传参方式: <Link to="xxx state={}/>
```

!!在 historyhashrouter 中 刷新会导致参数丢失
接收:使用 useMatch() hook 进行接收

### 编程式路由

目前只支持 state 方式 若需要其他方式则按其他方式传递规则
使用 useHistory hook
useHistory({
path:"",
state:{

}
})

   <table>
    <tr>
        <td>Foo</td>
    </tr>
  </table>
