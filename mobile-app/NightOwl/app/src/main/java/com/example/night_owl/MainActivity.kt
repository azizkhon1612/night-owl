package com.example.night_owl

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView

class MainActivity : AppCompatActivity() {
    val webView:WebView?=null;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        webView=findViewById(R.id.webView)
        webView.loadUrl("https://night-owl-seven.vercel.app/")
        webView.settings.javaScriptEnabled=true
        webView.settings.domStorageEnabled=true
        webView.settings.setSupportMultipleWindows(false)
        webView.settings.javaScriptCanOpenWindowsAutomatically=false

    }

}