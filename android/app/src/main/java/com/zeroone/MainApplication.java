package com.zeroone;

import android.app.Application;
import android.support.annotation.NonNull;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage; 
import com.reactnativenavigation.NavigationApplication;
import com.magus.fblogin.FacebookLoginPackage;
import com.imagepicker.ImagePickerPackage;

import io.fullstack.firestack.FirestackPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @NonNull
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        // Add the packages you require here.
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
          new VectorIconsPackage(),
          new LinearGradientPackage(),
          new FacebookLoginPackage(),
          new ImagePickerPackage(),
          new FirestackPackage()
        );
    }
}
