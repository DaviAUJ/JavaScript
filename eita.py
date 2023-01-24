import pyautogui as gui
import keyboard
import time

time.sleep(5)
while not keyboard.is_pressed('alt'):
    gui.typewrite("@Marcos")
    gui.press('enter')