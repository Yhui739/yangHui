import tkinter as tk

def onclick():  #按钮交互 函数
    print("我被点击了")



root = tk.Tk()  #创建一个窗口
'''
label_1=tk.Label(root,text="图书管理")  #增加标签名字

label_1.pack()  #显示
'''
tk.Label(root,text="图书管理").pack()
tk.Label(root,bitmap="error").pack()

btn=tk.Button(root,text="点我",command=onclick)#连接交互函数'''#增加按钮
btn.pack() #显示
root.mainloop()#主循环
